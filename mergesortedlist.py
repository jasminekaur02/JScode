###merge sorted lists 
class ListNode:
    def __init__(self , val = 0 , next = None):
        self.val = val 
        self.next  = next 
class Solution:
    def mergesortedlists(self , list1 : Optional[ListNode] , list2 : Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        current = dummy
        
        p1 , p2 = list1 , list2
        
        while p1 is not None and p2 is not None :
            if p1.val<=p2.val:
                current.next = p1 
                p1 = p1.next
            else:
                current.next = p2
                p2 = p2.next
            current = current.next
        if p1 is not None:
            current.next = p1
        if p2 is not None:
            current.next = p2
        
        return dummy.next
            
        
        