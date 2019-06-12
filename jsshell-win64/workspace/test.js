putstr("Enter a mouth number: ");
var mouthNum = readline();
switch(mouthNum){
	case "1":
		mouthNum = "January";
		print(mouthNum);
		break;
	case "2":
		mouthNum = "February";
		print(mouthNum);
		break;
	default:
		print("Bad input");
}