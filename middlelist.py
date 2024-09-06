###middle of linked list 
#class Solution :
 #   def middlelist(self , head:listNode) -> listNode:
   #     count = None
    #    curr = head 
     #   ans = 0 
      #  while curr is not None:
      #      count +=1 
      #      curr = curr.next 
      #  if count % 2 != 0 :
      #     ans  =  Math.floor(count/2)
            
       # else :
        #    ans =  Math.ceil(count/2)
        #return ans  
        
        
        
        
import math

class ListNode:
    def __init__(self, value=0, next=None):
        self.value = value
        self.next = next

class Solution:
    def middleList(self, head: ListNode) -> ListNode:
        # Step 1: Determine the length of the linked list
        count = 0
        curr = head
        while curr is not None:
            count += 1
            curr = curr.next
        
        # Step 2: Calculate the middle index using math.floor
        middle_index = math.floor(count / 2)  # Use floor division to get the middle index
        
        # Step 3: Traverse to the middle node
        curr = head
        for _ in range(middle_index):
            curr = curr.next
        
        # Step 4: Return the node from the middle index to the end
        return curr
        
        
    