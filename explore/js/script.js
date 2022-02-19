
$(document).ready(function(){

    var scene = new THREE.Scene();
    var obj1 = new THREE.Group()
        scene.add(obj1)


    var w = window.innerWidth
    var h = window.innerHeight






















var aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.OrthographicCamera( window.innerWidth / - 50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / -50, - 500, 1000); 
  camera.position.x = 0.5;
  camera.position.y = 2.5;
  camera.position.z = 1;
  // camera = new THREE.PerspectiveCamera( 45, aspect, 1, 1000 );
  // camera.position.x = 15;
  // camera.position.y = 5;
  // camera.position.z = 30;
  camera.lookAt(scene.position);


    var renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x000000 );//0x );

    renderer.toneMapping = THREE.LinearToneMapping;
    // renderer.toneMappingExposure = Math.pow( 0.94, 5.0 );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    window.addEventListener( 'resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }, false );

    document.body.appendChild( renderer.domElement);
    var counter = 0
    function render () {
        update()
      requestAnimationFrame( render );
      renderer.render( scene, camera );
        // console.log(scene)
    }
    render();
    function update(){
        counter++
        obj1.rotation.y = degrees_to_radians(counter)
    }






    var loader = new THREE.GLTFLoader();
        loader.crossOrigin = true;
        var obj_array = Array(9)
        var obj_group = new THREE.Group()
            scene.add(obj_group)
        var obj_array_counter = 0
loading(0)
function loading(i){
            obj_array[i] = new THREE.Group()
            obj_group.add(obj_array[i])
    console.log(i)
    loader.load( 'objects/obj'+(i+1)+'.gltf', function ( data ) {
        var obj = data.scene.children[0];
        obj.traverse( function( child ) {
            if ( child instanceof THREE.Mesh ) {
                var mat = new THREE.MeshBasicMaterial( {color: 0x000000, side:THREE.DoubleSide} );
                child.material = mat
            }
        });
        obj.scale.set(0.015,0.015,0.015)
        obj_array[obj_array_counter].add( obj );

        loader.load( 'objects/'+(i+1)+'_wire.gltf', function ( data ) {
            var obj = data.scene.children[0];
            obj.traverse( function( child ) {
                if ( child instanceof THREE.Mesh ) {
                    var mat = new THREE.MeshBasicMaterial( {color: 0xffffff, side:THREE.DoubleSide} );
                    child.material = mat
                }
            });
            obj.scale.set(0.015,0.015,0.015)
            obj_array[obj_array_counter].add( obj );
            console.log(obj_array.length)
                    obj_array_counter++
                if(obj_array_counter<obj_array.length){
                    loading(obj_array_counter)
                }else{
                    console.log('sldkf')
                    obj_array[0].position.x = 3*cube_width
                    obj_array[0].position.z = -3*cube_width
                    obj_array[0].position.y = cube_width

                    obj_array[1].position.x = 2*cube_width
                    obj_array[1].position.z = -2*cube_width
                    obj_array[1].position.y = cube_width

                    obj_array[2].position.x = 0*cube_width
                    obj_array[2].position.z = -1*cube_width
                    obj_array[2].position.y = cube_width

                    obj_array[3].position.x = -0*cube_width
                    obj_array[3].position.z = -0*cube_width
                    obj_array[3].position.y = cube_width

                    obj_array[4].position.x = 2*cube_width
                    obj_array[4].position.z = 0*cube_width
                    obj_array[4].position.y = cube_width

                    obj_array[5].position.x = -1*cube_width
                    obj_array[5].position.z = 1*cube_width
                    obj_array[5].position.y = cube_width

                    obj_array[6].position.x = -2*cube_width
                    obj_array[6].position.z = 2*cube_width
                    obj_array[6].position.y = cube_width

                    obj_array[7].position.x = -3*cube_width
                    obj_array[7].position.z = 3*cube_width
                    obj_array[7].position.y = cube_width

                    obj_array[8].position.x = -1*cube_width
                    obj_array[8].position.z = 4*cube_width
                    obj_array[8].position.y = cube_width



                }
        });
    });
}
var timeout;
window.addEventListener( 'mousemove', onMouseMove, false );
function onMouseMove( event ) {
  clearTimeout(timeout);
    $('.fake_scroll').css({'pointer-events':'none'})
    timeout = setTimeout(function(){$('.fake_scroll').css({'pointer-events':'auto'})}, 5000);
}
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

$('canvas').click(function(){
    event.preventDefault();

    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );

    for (var i = obj_group.children.length - 1; i >= 0; i--) {
        var intersects = raycaster.intersectObjects(obj_group.children[i].children[0]); 
        if ( intersects.length > 0 ) {
            console.log('hey')
        }
    }

})


        // for (var i = obj_array.length; i >= 0; i--) {


        //     if(i==0){
        //         for (var m = obj_array.length - 1; m >= 0; m--) {
        //             console.log(obj_array[m].children.length)
        //         }
        //         console.log(scene)
        //     }
        // }









        function degrees_to_radians(degrees){
            var pi = Math.PI;
            return degrees * (pi/180);
        }
})

