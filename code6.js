gdjs.New_32scene6_46Code = {};
gdjs.New_32scene6_46Code.GDNewObject6Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject6Objects2= [];
gdjs.New_32scene6_46Code.GDNewObject5Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject5Objects2= [];
gdjs.New_32scene6_46Code.GDNewObject52Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject52Objects2= [];
gdjs.New_32scene6_46Code.GDNewObject4Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject4Objects2= [];
gdjs.New_32scene6_46Code.GDNewObject2Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject2Objects2= [];
gdjs.New_32scene6_46Code.GDNewObjectObjects1= [];
gdjs.New_32scene6_46Code.GDNewObjectObjects2= [];
gdjs.New_32scene6_46Code.GDNewObject3Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject3Objects2= [];
gdjs.New_32scene6_46Code.GDNewObject32Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject32Objects2= [];
gdjs.New_32scene6_46Code.GDNewObject322Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject322Objects2= [];
gdjs.New_32scene6_46Code.GDNewObject7Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject7Objects2= [];
gdjs.New_32scene6_46Code.GDNewObject8Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject8Objects2= [];
gdjs.New_32scene6_46Code.GDNewObject9Objects1= [];
gdjs.New_32scene6_46Code.GDNewObject9Objects2= [];

gdjs.New_32scene6_46Code.conditionTrue_0 = {val:false};
gdjs.New_32scene6_46Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene6_46Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene6_46Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene6_46Code.condition3IsTrue_0 = {val:false};


gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene6_46Code.GDNewObject2Objects1});gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.New_32scene6_46Code.GDNewObject6Objects1});gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene6_46Code.GDNewObject2Objects1});gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject9Objects1Objects = Hashtable.newFrom({"NewObject9": gdjs.New_32scene6_46Code.GDNewObject9Objects1});gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene6_46Code.GDNewObject2Objects1});gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject9Objects1Objects = Hashtable.newFrom({"NewObject9": gdjs.New_32scene6_46Code.GDNewObject9Objects1});gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene6_46Code.GDNewObject2Objects1});gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.New_32scene6_46Code.GDNewObject7Objects1});gdjs.New_32scene6_46Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene6_46Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.New_32scene6_46Code.GDNewObject6Objects1);

gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6_46Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject2Objects1Objects, gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject6Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene6_46Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Ending", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene6_46Code.GDNewObject2Objects1);

gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
gdjs.New_32scene6_46Code.condition1IsTrue_0.val = false;
gdjs.New_32scene6_46Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( !(gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.New_32scene6_46Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene6_46Code.GDNewObject2Objects1[k] = gdjs.New_32scene6_46Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene6_46Code.GDNewObject2Objects1.length = k;}if ( gdjs.New_32scene6_46Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( !(gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32scene6_46Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene6_46Code.GDNewObject2Objects1[k] = gdjs.New_32scene6_46Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene6_46Code.GDNewObject2Objects1.length = k;}if ( gdjs.New_32scene6_46Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32scene6_46Code.condition2IsTrue_0.val = true;
        gdjs.New_32scene6_46Code.GDNewObject2Objects1[k] = gdjs.New_32scene6_46Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene6_46Code.GDNewObject2Objects1.length = k;}}
}
if (gdjs.New_32scene6_46Code.condition2IsTrue_0.val) {
/* Reuse gdjs.New_32scene6_46Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene6_46Code.GDNewObject2Objects1);

gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32scene6_46Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene6_46Code.GDNewObject2Objects1[k] = gdjs.New_32scene6_46Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene6_46Code.GDNewObject2Objects1.length = k;}if (gdjs.New_32scene6_46Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene6_46Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene6_46Code.GDNewObject2Objects1);

gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32scene6_46Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene6_46Code.GDNewObject2Objects1[k] = gdjs.New_32scene6_46Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene6_46Code.GDNewObject2Objects1.length = k;}if (gdjs.New_32scene6_46Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene6_46Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].setAnimationName("jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene6_46Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene6_46Code.GDNewObject9Objects1);

gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6_46Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject2Objects1Objects, gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject9Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene6_46Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene6_46Code.GDNewObject2Objects1 */
/* Reuse gdjs.New_32scene6_46Code.GDNewObject9Objects1 */
{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").setJumpSpeed(900);
}
}{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject9Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject9Objects1[i].setAnimationName("up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene6_46Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene6_46Code.GDNewObject9Objects1);

gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6_46Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject2Objects1Objects, gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject9Objects1Objects, true, runtimeScene, false);
}if (gdjs.New_32scene6_46Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene6_46Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").setJumpSpeed(400);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene6_46Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.New_32scene6_46Code.GDNewObject7Objects1);

gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6_46Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject2Objects1Objects, gdjs.New_32scene6_46Code.mapOfGDgdjs_46New_9532scene6_9546Code_46GDNewObject7Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene6_46Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene6.", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene6_46Code.GDNewObject2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32scene6_46Code.GDNewObject2Objects1.length !== 0 ? gdjs.New_32scene6_46Code.GDNewObject2Objects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene6_46Code.GDNewObject9Objects1);

gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene6_46Code.GDNewObject9Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene6_46Code.GDNewObject9Objects1[i].hasAnimationEnded() ) {
        gdjs.New_32scene6_46Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene6_46Code.GDNewObject9Objects1[k] = gdjs.New_32scene6_46Code.GDNewObject9Objects1[i];
        ++k;
    }
}
gdjs.New_32scene6_46Code.GDNewObject9Objects1.length = k;}if (gdjs.New_32scene6_46Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene6_46Code.GDNewObject9Objects1 */
{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject9Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject9Objects1[i].setAnimationName("idle");
}
}}

}


{


gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6_46Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene6_46Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene6_46Code.GDNewObject9Objects1);
{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject9Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject9Objects1[i].setAnimationName("idle");
}
}}

}


{


gdjs.New_32scene6_46Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene6_46Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
}if (gdjs.New_32scene6_46Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene6_46Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32scene6_46Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene6_46Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").setCanGrabPlatforms(true);
}
}}

}


};

gdjs.New_32scene6_46Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene6_46Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject52Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject52Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject32Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject32Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject322Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject322Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene6_46Code.GDNewObject9Objects1.length = 0;
gdjs.New_32scene6_46Code.GDNewObject9Objects2.length = 0;

gdjs.New_32scene6_46Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene6_46Code'] = gdjs.New_32scene6_46Code;
