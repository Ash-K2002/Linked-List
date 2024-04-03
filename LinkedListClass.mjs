import {myNode} from './nodeClass.mjs';

class myLinkedList{

    constructor(){
        this.head=null;
        this.size=0;
        this.tail=null;
    }

    // adds a node at start
    prepend(value){
        const newNode= new myNode();
        newNode.value=value;

        if(this.head==null){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.size+=1;
    }

    // adds a node at end
    append(value)
    {   
        const newNode= new myNode();

        newNode.value=value;
        this.tail=newNode;

        if(this.head==null){
            this.head=newNode;
        }
        else{
            let temp=this.head;
            while(temp.next!=null)
            {
                temp=temp.next;
            }
            temp.next=newNode;
        }
        this.size+=1;
    }

    // finds node at a given index
    at(index){
        let temp=this.head;
        for(let i=0;i<index;i++)
        {
            if(temp==null)
            break;
        temp=temp.next;
        }
        return temp;
    }

    // removes last element and returns its value, null if empty
    pop(){
        let popped=null;
        if(this.head!=null){
            let temp=this.head;
            if(temp.next==null)
            {
                popped=temp.value;
                this.head=null;
                this.tail=null;
            }
            else{
                while(temp.next.next!=null)
                {
                    temp=temp.next;
                }
                
                popped=temp.next.value;
                temp.next=null;
                this.tail=temp;
            }

        }
        return popped;
    }

    // returns true if a value is found in linked list else false
    contains(value)
    {
        let temp = this.head;
        while(temp!=null)
        {
            if(temp.value===value){
            return true;
        }
            temp=temp.next;
        }
        return false;
    }

    // returns index of a value, false if not found
    find(value){
        let temp= this.head;
        let index=0;
        while(temp!=null)
        {
            if(temp.value===value)
            {return index;}
            index+=1;
            temp=temp.next;
        }
        return false;
    }

    // converts a string representation of the linked list
    toString()
    {   let temp= this.head;
        let str='';
        while(temp!=null){
            str+=`( ${temp.value} )->`;
            temp=temp.next;
        }
        return str+'null';
    }

}

