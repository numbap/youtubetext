import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";

// This allows captions to show properly
Object.defineProperty(String.prototype, "capChunk", {
  value: function () {
    const chunkSize = 3;
    const thisArray = this.split(/\r?\n/);
    var R = [];
    var timeLine, captionLine, spacerLine;
    for (var i = 0; i < thisArray.length; i += chunkSize) {
      [timeLine, captionLine, spacerLine] = thisArray.slice(i, i + chunkSize);
      R.push({ timeLine, captionLine, spacerLine });
    }
    return R;
  },
});

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function* clearInfo(action) {
  try {
    console.log("Cleaing caption and paginator");
    yield put({ type: "CLEAR_CAPTION" });
    yield put({ type: "CLEAR_PAGINATOR" });
  } catch (e) {
    console.log(e);
  }
}

function* loadUser(action) {
  try {
    console.log(action);
    console.log("Setting user");

    yield put({
      type: "SET_USER",
      user: {
        access_token: action.response.tc.access_token,
        googleId: action.response.googleId,
        imageUrl: action.response.profileObj.imageUrl,
        email: action.response.profileObj.email,
        name: action.response.profileObj.name,
      },
    });

    const queryUrl = `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&mine=true&key=${API_KEY}&maxResults=4`;

    const paginatorItems = yield fetch(queryUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${action.response.tc.access_token}`,
      },
    }).then((response) => response.json());

    console.log(paginatorItems, "reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    yield put({
      type: "SET_PAGINATOR",
      videos: paginatorItems.items,
      nextPage: paginatorItems.nextPageToken,
    });
  } catch (e) {
    console.log(e);
  }
}

function* fetchCaption(action) {
  // Get list of captions for the specified ID

  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var captionId = yield fetch(
      `https://www.googleapis.com/youtube/v3/captions?videoId=${action.videoId}&part=snippet&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items[0].id);

    var captionOutput = yield fetch(
      `https://www.googleapis.com/youtube/v3/captions/${captionId}?tfmt=sbv&id=${captionId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${action.token}`,
        },
      }
    ).then((response) => response.text());

    yield put({ type: "SET_CAPTION", caption: captionOutput.capChunk() });
  } catch (e) {
    console.log(e);
    yield put({ type: "SET_9999", message: e.message });
  }
}

function* fetchVideos(action) {
  try {
    const b = yield fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCSUMyPPmunaDKk0YHxCK-cw&part=snippet,id&order=date&maxResults=4`
    ).then((response) => response.json());

    yield put({ type: "SET_VIDLIST", vidList: b.items.slice(0, 33) });
  } catch (e) {
    console.log(e);
    yield put({ type: "SET_9999", message: e.message });
  }
}

function* clearCaption(action) {
  try {
    yield put({ type: "CLEAR_CAPTION", caption: null });
  } catch (e) {
    yield put({ type: "SET_9999", message: e.message });
  }
}

function* onGetVideos() {
  yield takeLatest("SET_VIDEOS_ASYNC", fetchVideos);
}

function* onGetCaption() {
  yield takeLatest("SET_CAPTION_ASYNC", fetchCaption);
}

function* onClearCaption() {
  yield takeLatest("CLEAR_CAPTION_ASYNC", clearCaption);
}

function* onFindCaption() {
  yield takeLatest("FIND_CAPTION_ASYNC", fetchCaption);
}

function* onClearInfo() {
  yield takeLatest("CLEAR_INFO_ASYNC", clearInfo);
}

function* onLoadUser() {
  yield takeLatest("LOAD_USER_ASYNC", loadUser);
}

function* mySaga() {
  yield all([
    call(onGetCaption),
    call(onClearCaption),
    call(onGetVideos),
    call(onFindCaption),
    call(onClearInfo),
    call(onLoadUser),
  ]);
}

export default mySaga;
