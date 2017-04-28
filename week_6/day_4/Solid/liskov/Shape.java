abstract class Shape {

  final String draw(){
    return "I'm drawing a " + this.getClass().getSimpleName().toLowerCase() + "!"; 
}
}