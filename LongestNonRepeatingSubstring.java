/*package whatever //do not write package name here */

import java.io.*;

class GFG {
	public static void main (String[] args) {
		System.out.println("GfG!");
		String test= "GEEKSFORGEEKS";
		int max = 0;
		int j = 0 ;
		//GEEKSFORGEEKS
		//EKSFORG
		//------
		//ABDEFGABEF
		//BDEFGA
		String result = "";
		char arr[] =new char[test.length()];
		int count[] = new int[256];

		for(int i = 0 ; i <test.length()-1; i++){

		       arr[i] =test.charAt(i);
		       count[arr[i]]++;
		   //    System.out.println(count[arr[i]] + "count chars ");
		          //  System.out.println("char is : "+arr[i] + "count is : "+count[arr[i]] + "  j is :" + j);

		    if(test.charAt(i) != test.charAt(i+1) || count[arr[i]]==1){
		        j++;
		        if(count[arr[i]]==1){
		            //j>=max
		            max = j;
		            result+=arr[i];
		            
		        }
		    }
		    else{
		        j = 0;
		    }
		// System.out.println("length "+j + test.charAt(i) + "   " + test.charAt(i+1));
		}
		System.out.println("substrnigs "+result.substring(1,result.length())+result.substring(0,1));
	}
}