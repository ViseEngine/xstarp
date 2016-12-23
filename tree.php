<?php
/**
 * Created by PhpStorm.
 * User: @van
 * Date: 2016/1/20
 * Time: 15:49
 */
include "layout_header.php";
?>

<style>
    .tree-wrap {
        display: inline-block;
        min-width: 330px;
        min-height: 330px;
        padding: 5px;
        border: 1px solid #358ccb;
        vertical-align: top;
    }
    .api-wrap {
        display: inline-block;
        min-width: 300px;
        padding: 5px;
        border: 1px solid #06c;
        vertical-align: top;
    }
    .api-wrap li {list-style: disc inside none;}
</style>

<div class="x-panel">
    <div class="x-panel-title">树型选择器</div>
    <div class="x-panel-content">
        <p class="x-color-blue">示例：</p>

<pre><code class="language-html"><textarea>
    <p>方法一</p>
    <div class="member_tree"></div>
    <p>方法二</p>
    <div>
        <input class="member_tree2" placeholder="">
    </div>
    <script>
        var testTree1 = xTree({
            dom: $('.test_tree1'),
            only_child: false,
            is_multi: true,
            is_trigger: false,
            node_merge: false,
            has_search: false,
            expand: 3,
            data: [
                {id: 1, name: '行政部', nodeId: 0, is_node: true, is_check: false},
                {id: 3, name: '财务部', nodeId: 1, is_node: true, is_check: false},
                {id: 8, name: '财务部2', nodeId: 3, is_node: true, is_check: false},
                {id: 5, name: '李职员', nodeId: 8, is_node: false, is_check: false},
                {id: 6, name: '孙职员', nodeId: 8, is_node: false, is_check: false},
                {id: 2, name: '张部长', nodeId: 1, is_node: false, is_check: false},
                {id: 4, name: '刘职员', nodeId: 3, is_node: false, is_check: false},
                {id: 1, name: '王经理', nodeId: 0, is_node: false, is_check: false}
            ],
            onInit: function () {},
            onOpen: function () {},
            onBeforeOpen: function () {},
            onClose: function (hasChange) {console.log(testTree1.getId());},
            onCheck: function (item, dom, childrenItem) {},
            onCancel: function (item, dom, childrenItem) {}
        });

        var testTree2 = xTree({
            dom: $('.test_tree2'),
            only_child: false,
            is_multi: true,
            node_merge: false,
            has_search: true,
            expand: 3,
            data: [
                {id: 1, name: '行政部', nodeId: 0, is_node: true, is_check: false},
                {id: 3, name: '财务部', nodeId: 1, is_node: true, is_check: false},
                {id: 8, name: '财务部2', nodeId: 3, is_node: true, is_check: false},
                {id: 5, name: '李职员', nodeId: 8, is_node: false, is_check: false},
                {id: 6, name: '孙职员', nodeId: 8, is_node: false, is_check: false},
                {id: 2, name: '张部长', nodeId: 1, is_node: false, is_check: false},
                {id: 4, name: '刘职员', nodeId: 3, is_node: false, is_check: false},
                {id: 1, name: '王经理', nodeId: 0, is_node: false, is_check: false}
            ],
            //        choose:{
            //            nodeId:[1],
            //            id:[1]
            //        },
            onInit: function () {},
            onOpen: function () {},
            onBeforeOpen: function () {},
            onClose: function (hasChange) {
                console.log(testTree.getId());
                console.log(testTree._makeSearch);
            },
            onCheck: function (item, dom, childrenItem) {
//            console.log(this);
//            console.log(this.getId());
//            console.log(testTree);
//            应该是  this.getId()比较规范  还是 testTree.getId()比较规范   this可以做到 只暴漏该暴漏的方法
            },
            onCancel: function (item, dom, childrenItem) {}
        });
    </script>
</textarea></code></pre>

        <p class="x-color-blue">效果:</p>
        <div class="tree-wrap">
            <p>方法一</p>
            <div class="test_tree1"></div>
        </div>
        <div class="tree-wrap">
            <p>方法二</p>
            <input class="test_tree2" placeholder="">
        </div>

        <p class="x-color-blue">规则:</p>
        <p>属性</p>
        <div class="">
            <p>is_trigger:true, //是否需要触发? 否则直接显示</p>
            <p>has_search:false,</p>
            <p>only_child:true,//是否结果只要 child</p>
            <p>node_merge:true,//是否需要合并结果</p>
            <p>zIndex:1,</p>
            <p>choose:false, //哪些是选中的？优先级高于data</p>
            <p>is_node_first:false,//是否需要节点排在前面 否则按照data的顺序</p>
            <p>is_multi:true,//是否多选</p>
            <p>expand:false, //是否展开 todo</p>
            <p>rootId:0,</p>
            <p>width:null,</p>
            <p>maxHeight:null,</p>
            <p>data:[],</p>
        </div>

        <p>事件</p>
        <div class="">
            <p>onInit: function () {},</p>
            <p>onOpen: function () {}, //触发时</p>
            <p>onBeforeOpen: function () {},</p>
            <p>onClose: function (has_chg) {
                console.log('是否产生变化：'+has_chg);
                },</p>
            <p>onCheck: function (item,dom,childItem) {}</p>
            <p>onCancel: function (item,dom,childItem) {}</p>
        </div>

        <p>方法</p>
        <div class="">
            <p>start:function(){},</p>
            <p>end:function(){},</p>
            <p>getName:function(){},</p>
            <p>getId:function(){},</p>
            <p>cancelItem:function(){},</p>
            <p>checkItem:function(){},</p>
            <p>getItem:function(){},</p>
            <p>search:function(){},</p>
        </div>
    </div>
</div>

<script type="text/javascript" src="src/js/tree.js"></script>

<script>
    var testTree1 = xTree({
        dom: $('.test_tree1'),
        only_child: false,
        is_multi: true,
        is_trigger: false,
        node_merge: false,
        has_search: false,
        expand: 3,
        data: [
            {id: 1, name: '行政部', nodeId: 0, is_node: true, is_check: false},
            {id: 3, name: '财务部', nodeId: 1, is_node: true, is_check: false},
            {id: 8, name: '财务部2', nodeId: 3, is_node: true, is_check: false},
            {id: 5, name: '李职员', nodeId: 8, is_node: false, is_check: false},
            {id: 6, name: '孙职员', nodeId: 8, is_node: false, is_check: false},
            {id: 2, name: '张部长', nodeId: 1, is_node: false, is_check: false},
            {id: 4, name: '刘职员', nodeId: 3, is_node: false, is_check: false},
            {id: 1, name: '王经理', nodeId: 0, is_node: false, is_check: false}
        ],
        //        choose:{
        //            nodeId:[1],
        //            id:[1]
        //        },
        onInit: function () {
        },
        onOpen: function () {
        },
        onBeforeOpen: function () {
        },
        onClose: function (hasChange) {
            console.log(testTree1.getId());
        },
        onCheck: function (item, dom, childrenItem) {
//            console.log(this);
//            console.log(this.getId());
//            console.log(testTree1);
//            应该是  this.getId()比较规范  还是 testTree1.getId()比较规范   this可以做到 只暴漏该暴漏的方法
        },
        onCancel: function (item, dom, childrenItem) {
        }
    });
</script>

<script>
    var testTree2 = xTree({
        dom: $('.test_tree2'),
        only_child: false,
        is_multi: true,
        node_merge: false,
        has_search: true,
        expand: 3,
        data: [
            {id: 1, name: '行政部', nodeId: 0, is_node: true, is_check: false},
            {id: 3, name: '财务部', nodeId: 1, is_node: true, is_check: false},
            {id: 8, name: '财务部2', nodeId: 3, is_node: true, is_check: false},
            {id: 5, name: '李职员', nodeId: 8, is_node: false, is_check: false},
            {id: 6, name: '孙职员', nodeId: 8, is_node: false, is_check: false},
            {id: 2, name: '张部长', nodeId: 1, is_node: false, is_check: false},
            {id: 4, name: '刘职员', nodeId: 3, is_node: false, is_check: false},
            {id: 1, name: '王经理', nodeId: 0, is_node: false, is_check: false}
        ],
        //        choose:{
        //            nodeId:[1],
        //            id:[1]
        //        },
        onInit: function () {
        },
        onOpen: function () {
        },
        onBeforeOpen: function () {
        },
        onClose: function (hasChange) {
            console.log(testTree.getId());
            console.log(testTree._makeSearch);
        },
        onCheck: function (item, dom, childrenItem) {
//            console.log(this);
//            console.log(this.getId());
//            console.log(testTree);
//            应该是  this.getId()比较规范  还是 testTree.getId()比较规范   this可以做到 只暴漏该暴漏的方法
        },
        onCancel: function (item, dom, childrenItem) {
        }
    });
</script>

<?php

include "layout_footer.php";
?>
