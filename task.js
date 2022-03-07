/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */

// Load two standard modules.
define ( ['N/record'] ,
    // Add the callback function.
    function(record) {
        function task(context) {
            if (context.type !== context.UserEventType.CREATE)
                return;
            var newRecord = context.newRecord;
            var customfield = newRecord.getValue ({
                fieldId: 'custbody_sales_rep'
            });
            if (customfield) {
                var newTask = record.create({
                    type: record.Type.TASK,
                    isDynamic: true
            });
                 newTask.setValue({
                    fieldId: 'salesrep',
                    value: customfield
                });  
                try {
                    var newTaskId = newTask.save();
                    log.debug({
                        title: 'Task record created successfully',
                        details: 'New task record ID:  ' + newTaskId
                    });
                 } catch (e) {
                     log.error({
                         title: e.name,
                            details: e.message
                     });
                }
        }                
    }   
    return {
        task: task
        
    };         
    });    