<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-04-21 13:04:52
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-21 13:09:13
-->
## 数据结构特点  
单链表由节点和指针构成的数据结构  
```
struct ListNode {
    int val;
    ListNode *next;
}
```  
由于进行链表操作时，尤其删除节点时，经常会因为对当前节点进行操作而导致内存或指针出问题。有两个小技巧，第一尽量处理当前节点下一个节点而非本身节点。第二建立一个dummy node（哑结点）使其指向当前链表的头节点，这样即使原链表所有节点全部删除，也会有一个dummy存在，返回dummy->next即可。