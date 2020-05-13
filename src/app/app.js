import { generateKeyPair } from "crypto";

//Google Login
function onLoadFunction() {
    generateKeyPair.client.setApiKey('AIzaSyB_4nuyAQTrtZEKHcksjudLpZL-0ur64-A');
    generateKeyPair.client.load('plus', 'vi', function() {});
}