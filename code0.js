gdjs.MenuCode = {};
gdjs.MenuCode.GDNewObject6Objects1= [];
gdjs.MenuCode.GDNewObject6Objects2= [];
gdjs.MenuCode.GDNewObject5Objects1= [];
gdjs.MenuCode.GDNewObject5Objects2= [];
gdjs.MenuCode.GDNewObject52Objects1= [];
gdjs.MenuCode.GDNewObject52Objects2= [];
gdjs.MenuCode.GDNewObject4Objects1= [];
gdjs.MenuCode.GDNewObject4Objects2= [];
gdjs.MenuCode.GDNewObject2Objects1= [];
gdjs.MenuCode.GDNewObject2Objects2= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDNewObject3Objects1= [];
gdjs.MenuCode.GDNewObject3Objects2= [];
gdjs.MenuCode.GDNewObject32Objects1= [];
gdjs.MenuCode.GDNewObject32Objects2= [];
gdjs.MenuCode.GDNewObject322Objects1= [];
gdjs.MenuCode.GDNewObject322Objects2= [];
gdjs.MenuCode.GDNewObject7Objects1= [];
gdjs.MenuCode.GDNewObject7Objects2= [];
gdjs.MenuCode.GDNewObject8Objects1= [];
gdjs.MenuCode.GDNewObject8Objects2= [];
gdjs.MenuCode.GDNewObject7Objects1= [];
gdjs.MenuCode.GDNewObject7Objects2= [];
gdjs.MenuCode.GDNewObject8Objects1= [];
gdjs.MenuCode.GDNewObject8Objects2= [];
gdjs.MenuCode.GDNewObject9Objects1= [];
gdjs.MenuCode.GDNewObject9Objects2= [];
gdjs.MenuCode.GDNewObject10Objects1= [];
gdjs.MenuCode.GDNewObject10Objects2= [];
gdjs.MenuCode.GDNewObject11Objects1= [];
gdjs.MenuCode.GDNewObject11Objects2= [];
gdjs.MenuCode.GDNewObject122Objects1= [];
gdjs.MenuCode.GDNewObject122Objects2= [];
gdjs.MenuCode.GDNewObject12Objects1= [];
gdjs.MenuCode.GDNewObject12Objects2= [];
gdjs.MenuCode.GDNewObject13Objects1= [];
gdjs.MenuCode.GDNewObject13Objects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.MenuCode.GDNewObject7Objects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7291076);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObject10Objects1Objects = Hashtable.newFrom({"NewObject10": gdjs.MenuCode.GDNewObject10Objects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8663764);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObject11Objects1Objects = Hashtable.newFrom({"NewObject11": gdjs.MenuCode.GDNewObject11Objects1});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7593588);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.MenuCode.GDNewObject7Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.MenuCode.GDNewObject10Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObject10Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCcdE_Ckoi6TgcNuijj2fVjA/featured", runtimeScene);
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject11"), gdjs.MenuCode.GDNewObject11Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObject11Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://discord.gg/cF542q2cCN", runtimeScene);
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject13"), gdjs.MenuCode.GDNewObject13Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDNewObject13Objects1.length !== 0 ? gdjs.MenuCode.GDNewObject13Objects1[0] : null), true, "", 0);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewObject6Objects1.length = 0;
gdjs.MenuCode.GDNewObject6Objects2.length = 0;
gdjs.MenuCode.GDNewObject5Objects1.length = 0;
gdjs.MenuCode.GDNewObject5Objects2.length = 0;
gdjs.MenuCode.GDNewObject52Objects1.length = 0;
gdjs.MenuCode.GDNewObject52Objects2.length = 0;
gdjs.MenuCode.GDNewObject4Objects1.length = 0;
gdjs.MenuCode.GDNewObject4Objects2.length = 0;
gdjs.MenuCode.GDNewObject2Objects1.length = 0;
gdjs.MenuCode.GDNewObject2Objects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDNewObject3Objects1.length = 0;
gdjs.MenuCode.GDNewObject3Objects2.length = 0;
gdjs.MenuCode.GDNewObject32Objects1.length = 0;
gdjs.MenuCode.GDNewObject32Objects2.length = 0;
gdjs.MenuCode.GDNewObject322Objects1.length = 0;
gdjs.MenuCode.GDNewObject322Objects2.length = 0;
gdjs.MenuCode.GDNewObject7Objects1.length = 0;
gdjs.MenuCode.GDNewObject7Objects2.length = 0;
gdjs.MenuCode.GDNewObject8Objects1.length = 0;
gdjs.MenuCode.GDNewObject8Objects2.length = 0;
gdjs.MenuCode.GDNewObject7Objects1.length = 0;
gdjs.MenuCode.GDNewObject7Objects2.length = 0;
gdjs.MenuCode.GDNewObject8Objects1.length = 0;
gdjs.MenuCode.GDNewObject8Objects2.length = 0;
gdjs.MenuCode.GDNewObject9Objects1.length = 0;
gdjs.MenuCode.GDNewObject9Objects2.length = 0;
gdjs.MenuCode.GDNewObject10Objects1.length = 0;
gdjs.MenuCode.GDNewObject10Objects2.length = 0;
gdjs.MenuCode.GDNewObject11Objects1.length = 0;
gdjs.MenuCode.GDNewObject11Objects2.length = 0;
gdjs.MenuCode.GDNewObject122Objects1.length = 0;
gdjs.MenuCode.GDNewObject122Objects2.length = 0;
gdjs.MenuCode.GDNewObject12Objects1.length = 0;
gdjs.MenuCode.GDNewObject12Objects2.length = 0;
gdjs.MenuCode.GDNewObject13Objects1.length = 0;
gdjs.MenuCode.GDNewObject13Objects2.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
