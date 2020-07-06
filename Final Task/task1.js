var isovalue = 128;
var cmap_choice = 0;
var reflection_choice = 2;
var volume = new KVS.LobsterData();
var screen = new KVS.THREEScreen();
screen.init( volume, {
  width: window.innerWidth * 0.7,
  height: window.innerHeight * 0.4,
  targetDom: document.getElementById('display'),
  enableAutoResize: false
});
var surfaces = Isosurfaces( volume, isovalue, cmap_choice, reflection_choice, screen.camera, screen.light );
screen.scene.add( surfaces );

function ColorMapClick(){
  screen.scene.remove(surfaces);
  var colormap = document.getElementsByName('colormap');
  for(var i = 0; i < colormap.length; i++){
    if(colormap[i].checked){
      cmap_choice = i;
    }
  }
  var surfaces = Isosurfaces( volume, isovalue, cmap_choice, reflection_choice, screen.camera, screen.light );
  screen.scene.add( surfaces );
}

function ReflectionClick(){
  screen.scene.remove(surfaces);
  var reflection = document.getElementsByName('reflection');
  for(var i = 0; i < reflection.length; i++){
    if(reflection[i].checked){
      reflection_choice = i;
    }
  }
  var surfaces = Isosurfaces( volume, isovalue, cmap_choice, reflection_choice, screen.camera, screen.light );
  screen.scene.add( surfaces );
}

function main()
{
    /*var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.8,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });*/

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    // var isovalue = 128;
    // var cmap_choice = 0;
    // var reflection_choice = 2;
    // var surfaces = Isosurfaces( volume, isovalue, cmap_choice, reflection_choice, screen.camera, screen.light );
    // screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.7, window.innerHeight * 0.4 ] );
    });



    screen.loop();
}
