gdjs.EndingCode = {};
gdjs.EndingCode.GDNewObject6Objects1= [];
gdjs.EndingCode.GDNewObject6Objects2= [];
gdjs.EndingCode.GDNewObject5Objects1= [];
gdjs.EndingCode.GDNewObject5Objects2= [];
gdjs.EndingCode.GDNewObject52Objects1= [];
gdjs.EndingCode.GDNewObject52Objects2= [];
gdjs.EndingCode.GDNewObject4Objects1= [];
gdjs.EndingCode.GDNewObject4Objects2= [];
gdjs.EndingCode.GDNewObject2Objects1= [];
gdjs.EndingCode.GDNewObject2Objects2= [];
gdjs.EndingCode.GDNewObjectObjects1= [];
gdjs.EndingCode.GDNewObjectObjects2= [];
gdjs.EndingCode.GDNewObject3Objects1= [];
gdjs.EndingCode.GDNewObject3Objects2= [];
gdjs.EndingCode.GDNewObject32Objects1= [];
gdjs.EndingCode.GDNewObject32Objects2= [];
gdjs.EndingCode.GDNewObject322Objects1= [];
gdjs.EndingCode.GDNewObject322Objects2= [];
gdjs.EndingCode.GDNewObject7Objects1= [];
gdjs.EndingCode.GDNewObject7Objects2= [];
gdjs.EndingCode.GDNewObject8Objects1= [];
gdjs.EndingCode.GDNewObject8Objects2= [];
gdjs.EndingCode.GDNewObject9Objects1= [];
gdjs.EndingCode.GDNewObject9Objects2= [];
gdjs.EndingCode.GDNewObject10Objects1= [];
gdjs.EndingCode.GDNewObject10Objects2= [];
gdjs.EndingCode.GDNewObject13Objects1= [];
gdjs.EndingCode.GDNewObject13Objects2= [];

gdjs.EndingCode.conditionTrue_0 = {val:false};
gdjs.EndingCode.condition0IsTrue_0 = {val:false};
gdjs.EndingCode.condition1IsTrue_0 = {val:false};
gdjs.EndingCode.condition2IsTrue_0 = {val:false};


gdjs.EndingCode.mapOfGDgdjs_46EndingCode_46GDNewObject10Objects1Objects = Hashtable.newFrom({"NewObject10": gdjs.EndingCode.GDNewObject10Objects1});gdjs.EndingCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndingCode.condition0IsTrue_0.val = false;
{
gdjs.EndingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndingCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject13"), gdjs.EndingCode.GDNewObject13Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.EndingCode.GDNewObject13Objects1.length !== 0 ? gdjs.EndingCode.GDNewObject13Objects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.EndingCode.GDNewObject10Objects1);

gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
gdjs.EndingCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndingCode.mapOfGDgdjs_46EndingCode_46GDNewObject10Objects1Objects, runtimeScene, true, false);
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
gdjs.EndingCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.EndingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndingCode.GDNewObject6Objects1.length = 0;
gdjs.EndingCode.GDNewObject6Objects2.length = 0;
gdjs.EndingCode.GDNewObject5Objects1.length = 0;
gdjs.EndingCode.GDNewObject5Objects2.length = 0;
gdjs.EndingCode.GDNewObject52Objects1.length = 0;
gdjs.EndingCode.GDNewObject52Objects2.length = 0;
gdjs.EndingCode.GDNewObject4Objects1.length = 0;
gdjs.EndingCode.GDNewObject4Objects2.length = 0;
gdjs.EndingCode.GDNewObject2Objects1.length = 0;
gdjs.EndingCode.GDNewObject2Objects2.length = 0;
gdjs.EndingCode.GDNewObjectObjects1.length = 0;
gdjs.EndingCode.GDNewObjectObjects2.length = 0;
gdjs.EndingCode.GDNewObject3Objects1.length = 0;
gdjs.EndingCode.GDNewObject3Objects2.length = 0;
gdjs.EndingCode.GDNewObject32Objects1.length = 0;
gdjs.EndingCode.GDNewObject32Objects2.length = 0;
gdjs.EndingCode.GDNewObject322Objects1.length = 0;
gdjs.EndingCode.GDNewObject322Objects2.length = 0;
gdjs.EndingCode.GDNewObject7Objects1.length = 0;
gdjs.EndingCode.GDNewObject7Objects2.length = 0;
gdjs.EndingCode.GDNewObject8Objects1.length = 0;
gdjs.EndingCode.GDNewObject8Objects2.length = 0;
gdjs.EndingCode.GDNewObject9Objects1.length = 0;
gdjs.EndingCode.GDNewObject9Objects2.length = 0;
gdjs.EndingCode.GDNewObject10Objects1.length = 0;
gdjs.EndingCode.GDNewObject10Objects2.length = 0;
gdjs.EndingCode.GDNewObject13Objects1.length = 0;
gdjs.EndingCode.GDNewObject13Objects2.length = 0;

gdjs.EndingCode.eventsList0(runtimeScene);
return;

}

gdjs['EndingCode'] = gdjs.EndingCode;
