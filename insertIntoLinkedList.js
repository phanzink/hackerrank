function insertNodeAtTail(head, data) {
    let node = new SinglyLinkedListNode(data);
    
    if(head == null) {
        head = node;
        return head;
    }
    
    let current = head;
    while(current.next != null) {
        current = current.next; 
    }
    
    current.next = node;
    return head;
}