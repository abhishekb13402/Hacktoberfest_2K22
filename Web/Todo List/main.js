// /*
$(document).ready( function(){

	let counter = 0;
	const form = $("#new-task-form");
	console.log(form);
	$("#new-task-form").submit(function(event){
	
		counter++;
		event.preventDefault();
		console.log("prevent Default working")
		
		const task = $("#new-task-input").val();

		var task_div = $('<div>').addClass('task');
		var content_div = $('<div>').addClass('content');

		var input_f = $('<input>').attr({
			type: 'text',
			value:`${task}`,
			class:'text',
			readonly:'readonly',
			id: `${counter}`
		});
		
		
		
		


		var actions_div = $('<div>').addClass('actions');
		
		content_div.append(input_f);
		
		var edit_but = $('<button>').attr({
			class:'edit',
			id: `${counter}-edit`
		});
		
		
		edit_but.html("✏️");

		
		var del_but = $('<button>').attr({
			class:'delete',
		});

		del_but.html("🗑️");



		actions_div.append(edit_but);
		actions_div.append(del_but);
		task_div.append(content_div);
		task_div.append(actions_div);

		
		$('#tasks').append(task_div);
	

	})


	$("body").on('click','.edit',function(){

		var string = $(this).attr('id').substring(0,1);

		console.log("edit click",$(this).parent())
		if ($(this).text()=="✏️"){
			$(this).text("Save");
			
			$(`#${string}`).removeAttr('readonly');
			
			// $()
		}else{
			$(`#${string}`).attr("readonly", "readonly");
			$(this).text("✏️");
		}

	})

	$("body").on('click','.delete',function(){
		$(this).parent().parent().remove();
	})

	
});


