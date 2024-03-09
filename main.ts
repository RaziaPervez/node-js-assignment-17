//project=17

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinn+er.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//creating a guest list 
let guestlist1 =["Maheen","Nadia","Isha","Muskhan"]
//making variable for those guest who can't come
let dontcome =guestlist1 [0]
//print the name of guest who unable to come 
console.log (dontcome, "she'll unable to come")
//add or remove guest from the guestlist
guestlist1.splice(0,1,"Ayesha")
//message print for a bigger table
console.log ("Good news!we found a bigger table")
//adding a new guest at the starting index of guestlist
guestlist1.unshift ("samrah")
//adding new guest at the ending index of guestlist
guestlist1.push ("kashaf")
//adding new name at the middle index of guestlist
let middleindex: number=Math.floor (guestlist1.length/2) 
//adding new guest to middle index of array 
guestlist1.splice(middleindex,0,"azaan")
//printing updated guest list
console.log("updated guest list")
guestlist1.forEach(oneguest=>console.log(`hello ${oneguest},would you like to dinner with me`))
//inform that only two guest can be invited for dinner
console.log("unfortunately the new table won't arrive on time,so I can only invite two guests to dinner with me")
//using while loop to remove guest form guest list
while(guestlist1.length>2){
let removedguest1 = guestlist1.pop()
console.log(`sorry,${removedguest1},i can't invite you at dinner`)}
//printing a invitation to the last two guest
console.log( "invitation to last two guest")
guestlist1.forEach(lasttwo=>console.log(`luckly ${lasttwo},you are invited to dinner`))
//removing last two guest
guestlist1.pop();
guestlist1.pop()
console.log("empty list",guestlist1);