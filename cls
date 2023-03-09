[33mcommit 5cc469bcc8d25822f97427f085e15289c81a08cc[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Author: venkatachalamGopal <venkatvenki3940@gmail.com>
Date:   Thu Mar 9 08:40:28 2023 +0530

    first commit

[1mdiff --git a/src/createUsers.js b/src/createUsers.js[m
[1mindex 906c625..9ffa0f9 100644[m
[1m--- a/src/createUsers.js[m
[1m+++ b/src/createUsers.js[m
[36m@@ -20,7 +20,7 @@[m [mexport function CreateUsers(){[m
     // Delete Function call[m
 [m
     function deleteuser(id){[m
[31m-        if(window.confirm(`Are You sure ! wants to Delete this User- ${id}`)==true)[m
[32m+[m[32m        if(window.confirm(`Are You sure ! wants to Delete this User- ${id}`)===true)[m
         {[m
                 fetch(`${url}/${id}`,{[m
                 method:'DELETE'[m
