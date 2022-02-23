

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


    // window.firebaseSetValuesQueue.forEach(function (values) {
    //     window.setFirebaseValues(values);
    // });
    // window.firebaseSetValuesQueue = [];
} // start loading firebase scripts

            function firebaseValueChangeHandler(values) {
              $('.hovered1').removeClass('hovered1')
              $('.box_'+values.scroll1).find('.bomb').addClass('hovered1')
              $('.hovered2').removeClass('hovered2')
              $('.box_'+values.scroll2).find('.bomb').addClass('hovered2')
              $('.hovered3').removeClass('hovered3')
              $('.box_'+values.scroll3).find('.bomb').addClass('hovered3')
              $('.point1').css({'transform':'rotate('+(values.scroll1-200)%360+'deg)'})
              $('.point2').css({'transform':'rotate('+(values.scroll2-200)%360+'deg)'})
              $('.point3').css({'transform':'rotate('+(values.scroll3-200)%360+'deg)'})
            }