$(function(){

    //todo ekleme işlemi
    $('#todo-form').submit(function(){
        let todo = $('#todo').val().trim(); 

        $.ajax({
            url       : 'http://localhost:3000/todos',
            data      : {todo:todo},
            method    : "POST",
            success   : function(cevap){
                console.log(cevap);
            } 
        });
        
        return false;
    });

    //todo getir işlemi
    $.ajax({
        url: 'http://localhost:3000/todos',
        method: 'GET',
        success: function(cevap) {
            // for of, for in, forEach
            let todoHTML = ''; 
            let complete = '';
            cevap.forEach((data,index) => {
                //console.log(data, index);
                complete = '<span class="badge bg-danger">YAPILMADI</span>';
                if(data.complete){
                    complete = '<span class="badge bg-success">YAPILDI</span>';
                }
                todoHTML +=`
                    <tr>
                        <td>${index+1}</td>
                        <td>${data.todo}</td>
                        <td>${complete}</td>
                        <td>
                            <button class="btn btn-sm btn-danger">SİL</button>
                        </td>
                    </tr>
                `;
            });
            
            $('#todo-tbody').html(todoHTML);
        }
    });
});

