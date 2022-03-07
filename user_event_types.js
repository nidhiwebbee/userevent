/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */

define(["N/log","N/error"],function(log,error) {
    var exports={};
    function beforeLoad(context){
        log.debug({
            "title":"this is before load code example",
            "details":"type="+context.type
        });
    }
    function beforeSubmit(scriptContext){
        var renew= scriptContext.newRecord;
        renew.setvalue('','');
       log.debug ({
        "title":"this is before load code example",
        "details":"type="+ scriptContext.type
       });
    }
    function AfterSubmit(context){
        var currentuser = runtime.getCurrentUser().id;
        var currentRecord=context.newRecord;
        var so_id = currentRecord.getValue({
            fieldId: 'title'
        });
        email.send({
            author:currentuser,
            recipients:'nidhi@webbeeglobal.com',
            subject:'this is after submit event check code',
            body:'your aftersubmit userevent is successfully created and tested'+ so_id,
        });
    }
    exports.beforeLoad=beforeLoad;
    exports.beforeSubmit=beforeSubmit;
    exports.AfterSubmit=AfterSubmit;

    return exports;

});


