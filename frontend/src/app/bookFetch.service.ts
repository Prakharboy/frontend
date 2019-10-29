import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class BookFetchService {

    constructor(private ht:HttpClient) { } 

    private headers = {

        Authorization: 'Token 5d76d53171394e79a0d18183bcd77cc2ed18cb23'
    
    };
    private httpOptions = {
    
        headers : this.headers
    
    };
    url = "https://api.github.com/user/repos";

    repo:String="";
    path:String="";
    fileurl:String="";

    


    getBook():Observable<any>
    {
      return this.ht.get<any>("");
    }

    addBook(bookObj):Observable<any>
    { 
        console.log('obj: ', bookObj);
    return this.ht.post<any>(this.url,bookObj, this.httpOptions); 
    }


    createFile(bookObj):Observable<any>
    {
      this.repo="helloworld";
      this.path="intro";
      console.log('obj: ', bookObj);
      return this.ht.put<any>("https://api.github.com/repos/contently-books/"+this.repo+"/contents/"+this.path,bookObj, this.httpOptions); 


    }


 



}
