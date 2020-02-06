import $ from 'jquery';
import './styles.css';
import { Haiku } from './haiku.js';

$(document).ready(function(){

    console.log("Document is ready and working")
    
    $("#button").click(function(event){
        event.preventDefault();

        var line1 = $("#line1").val();
        var line2 = $("#line2").val();
        var line3 = $("#line3").val();

        var haiku = new Haiku(line1, line2, line3);

        console.log(haiku.checktype());



        $("#result").append("Button Works!")

    })


})
