$(window).ready(function(){ 
    let input = $("#inputField")
    let task = $("#addTask")
    let display = $("#diplayList")
    
    task.click(plus);

   function plus(){
    if (input.val() === ''){

        console.log("enter a task")
    }

else {
    console.log(input.val())

    // create new element
    let newTask = $("<span></span>").text(input.val())
    let btn = $("<button></button>").text("X")
    let parent = $("<div></div>")
    let check = $("<input></input>")

    // // give each elem a class or an id
    newTask.addClass('newTask')
    btn.addClass('remove')
    parent.addClass('parent')
    check.addClass('checkbox')
    check.attr('type','checkbox')


    // // add the click function to the add and remove buttons
    btn.click(function(){
        parent.remove()
    })

    check.change(function(){
        if(this.checked){
            newTask.css("textDecoration", "line-through");
        }
        else {
            newTask.css("textDecoration", "none");

        }
    })

    // // assign each child to a parent div
    display.append(parent)
    parent.append(check)
    parent.append(newTask)
    parent.append(btn)

}
   }
}); 