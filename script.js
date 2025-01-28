$(document).ready(function () {
    function updateTaskCounter() {
        var totalTasks = $("#tasks li").length;
        var completedTasks = $("#tasks li.completed").length;
        $("#total-count").text(totalTasks);
        $("#completed-count").text(completedTasks);
    }

    $("#add-button").click(function () {
        var task = $("#task-input").val();
        if (task) {
            $("#tasks").append("<li><input type='checkbox' id='task-checkBox'><span id='taskName'>" + task + "</span><button id='remove-task'>X</button></li>")
            updateTaskCounter();
        }
        $("#task-input").val("")
    })

    $(document).on('change', '#task-checkBox', function () {
        $(this).parent().toggleClass('completed')
        updateTaskCounter();
    })

    $(document).on('click', '#remove-task', function () {
        var taskItem = $(this).parent();
        taskItem.fadeOut(function () {
            taskItem.remove();
            updateTaskCounter();
        })
    })

    $('#filter-all').click(function () {
        $('#tasks li').show();
    });

    $("#filter-completed").click(function () {
        $("#tasks li").each(function () {
            if ($(this).hasClass("completed")) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        })
    })

    $('#filter-incomplete').click(function () {
        $('#tasks li').each(function () {
            if (!$(this).hasClass('completed')) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
})