

$(document).ready(function(){
    onLoadFinish()
})
function onLoadFinish() {
    console.log('onLoadFinish');
  var firebaseConfig = {
  apiKey: "AIzaSyA0pznM4nqNwUDmbpynb1OtxTUS6LUzeJk",
  authDomain: "arko-a6329.firebaseapp.com",
  projectId: "arko-a6329",
  storageBucket: "arko-a6329.appspot.com",
  messagingSenderId: "31247987011",
  appId: "1:31247987011:web:2afad3a69964161547fff6",
  measurementId: "G-F94XZQKZVB",
    databaseURL: "https://arko-a6329-default-rtdb.firebaseio.com/",
  };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    window.setFirebaseValues = function (values) {
        firebase.database().ref('values').update(values);
    };

    firebase.database().ref('values').on('value', function (snapshot) {
        if (typeof window.firebaseValueChangeHandler !== 'function') {
            return;
        }
        window.firebaseValueChangeHandler(snapshot.val());
    }); // ready to go

    if (typeof window.onFirebaseReady === 'function') {
        window.onFirebaseReady();
    } // empty value change queue


    window.firebaseSetValuesQueue.forEach(function (values) {
        window.setFirebaseValues(values);
    });
    window.firebaseSetValuesQueue = [];
} // start loading firebase scripts

        function onFirebaseReady() {
    $(window).scroll(function (event) {
        scrollpos = $(window).scrollTop();
                        setFirebaseValues({
                            scroll2 : scrollpos
                        });
    });

        }