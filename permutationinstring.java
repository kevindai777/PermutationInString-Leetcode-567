//Java Solution

class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int[] charArr = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            charArr[s1.charAt(i) - 'a']++;
        }
        
        int left = 0;
        int right = s1.length();
        
        while (right <= s2.length()) {
            String substring = s2.substring(left++, right++);
            int[] charArr2 = new int[26];
            
            for (int i = 0; i < substring.length(); i++) {
                charArr2[substring.charAt(i) - 'a']++;
            }
            
            if (Arrays.equals(charArr, charArr2)) {
                return true;
            }
        }
        
        return false;
    }
}