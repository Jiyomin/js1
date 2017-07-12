/**
 * Created by Administrator on 2017/7/10.
 */
/**
 * 返回指定的元素的下一个元素兄弟
 * @param elem
 * @return 指定的元素的下一个元素兄弟
 */
function next(elem){
    do{
        elem = elem && elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}
/**
 * 返回指定的元素的前一个元素兄弟
 * @param elem
 * @return 指定的元素的前一个元素兄弟
 */
function prev(elem){
    do{
        elem = elem && elem.previousSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}

/**
 * 查找指定的元素的第一个孩子节点
 * @param elem
 */
function first(elem){
    elem = elem.firstChild;
    return elem.nodeType == 1 ? elem : next(elem);
}
/**
 * 查找指定的元素的最后一个孩子节点
 * @param elem
 */
function after(elem){
    elem = elem.afterChild;
    return elem.nodeType == 1 ? elem : prev(elem);
}
