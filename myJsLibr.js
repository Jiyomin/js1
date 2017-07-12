/**
 * Created by Administrator on 2017/7/10.
 */
/**
 * ����ָ����Ԫ�ص���һ��Ԫ���ֵ�
 * @param elem
 * @return ָ����Ԫ�ص���һ��Ԫ���ֵ�
 */
function next(elem){
    do{
        elem = elem && elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}
/**
 * ����ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�
 * @param elem
 * @return ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�
 */
function prev(elem){
    do{
        elem = elem && elem.previousSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}

/**
 * ����ָ����Ԫ�صĵ�һ�����ӽڵ�
 * @param elem
 */
function first(elem){
    elem = elem.firstChild;
    return elem.nodeType == 1 ? elem : next(elem);
}
/**
 * ����ָ����Ԫ�ص����һ�����ӽڵ�
 * @param elem
 */
function after(elem){
    elem = elem.afterChild;
    return elem.nodeType == 1 ? elem : prev(elem);
}
