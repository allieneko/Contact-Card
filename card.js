$(document).ready(function(){
    $('button').click(function(){
        var first_name = $('#first_name').val()
        var last_name = $('#last_name').val()
        var description = $('#description').val()

$("#rightside").append(
        `
        <div class="card">
            <h3>${first_name} ${last_name}</h3>
            <p>Click for Description!</p>
            <p style="display:none;">${description}</p>
        </div>
        `
        )
        return false;
    })
    $(document).on("click", ".card",function(){
        $(this).children().toggle();
    })
})
