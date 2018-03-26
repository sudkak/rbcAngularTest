import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];
  currentUser: User;
  counter:number=0;  // remove just for test 
  changeDetector:Boolean = false;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(receivedUsers => {
        this.users = receivedUsers;
       // this.currentUser = this.users[0]; prevent default loading
       this.currentUser = {};
      });
  }

  // ngDoCheck(){
  //   this.changeDetector = true;
  //   this.users = this.users;
    
  // }

  changeCurrentUser(event: MouseEvent, user: User) {
    if(event){
      this.currentUser = user;
      this.counter++;
      console.log("counter",this.counter);
      console.log("current User"+ this.currentUser.address.city);
    }
   
  }
}
