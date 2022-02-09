gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDNewObject6Objects1= [];
gdjs.New_32scene2Code.GDNewObject6Objects2= [];
gdjs.New_32scene2Code.GDNewObject5Objects1= [];
gdjs.New_32scene2Code.GDNewObject5Objects2= [];
gdjs.New_32scene2Code.GDNewObject52Objects1= [];
gdjs.New_32scene2Code.GDNewObject52Objects2= [];
gdjs.New_32scene2Code.GDNewObject4Objects1= [];
gdjs.New_32scene2Code.GDNewObject4Objects2= [];
gdjs.New_32scene2Code.GDNewObject2Objects1= [];
gdjs.New_32scene2Code.GDNewObject2Objects2= [];
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDNewObject3Objects1= [];
gdjs.New_32scene2Code.GDNewObject3Objects2= [];
gdjs.New_32scene2Code.GDNewObject32Objects1= [];
gdjs.New_32scene2Code.GDNewObject32Objects2= [];
gdjs.New_32scene2Code.GDNewObject322Objects1= [];
gdjs.New_32scene2Code.GDNewObject322Objects2= [];
gdjs.New_32scene2Code.GDNewObject7Objects1= [];
gdjs.New_32scene2Code.GDNewObject7Objects2= [];
gdjs.New_32scene2Code.GDNewObject8Objects1= [];
gdjs.New_32scene2Code.GDNewObject8Objects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition3IsTrue_0 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene2Code.GDNewObject2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.New_32scene2Code.GDNewObject6Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene2Code.GDNewObject2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.New_32scene2Code.GDNewObject7Objects1});gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.New_32scene2Code.GDNewObject6Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject6Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
gdjs.New_32scene2Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( !(gdjs.New_32scene2Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNewObject2Objects1[k] = gdjs.New_32scene2Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNewObject2Objects1.length = k;}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( !(gdjs.New_32scene2Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32scene2Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNewObject2Objects1[k] = gdjs.New_32scene2Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNewObject2Objects1.length = k;}if ( gdjs.New_32scene2Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32scene2Code.condition2IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNewObject2Objects1[k] = gdjs.New_32scene2Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNewObject2Objects1.length = k;}}
}
if (gdjs.New_32scene2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNewObject2Objects1[k] = gdjs.New_32scene2Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNewObject2Objects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNewObject2Objects1[k] = gdjs.New_32scene2Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNewObject2Objects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].setAnimationName("jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.New_32scene2Code.GDNewObject7Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject7Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32scene2Code.GDNewObject2Objects1.length !== 0 ? gdjs.New_32scene2Code.GDNewObject2Objects1[0] : null), true, "", 0);
}}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject52Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject52Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject32Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject32Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject322Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject322Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject8Objects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
