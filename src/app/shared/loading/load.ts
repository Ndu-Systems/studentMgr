import * as $ from 'jquery';

export function LoadScreen(){
$(".loading-screen").fadeIn("slow");
}
export function StopLoadingScreen(){
    $(".loading-screen").fadeOut("slow");
    }