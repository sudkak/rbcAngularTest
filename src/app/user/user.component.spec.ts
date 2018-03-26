import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { User, Address } from '../user.model';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name', async(() => {
    // given
    const compiled = fixture.debugElement.nativeElement;

    // when
    let user = new User(new Address('xyz'),'John','John@xyz.com')
    fixture.componentInstance.user = user;

    // then
    setTimeout(() => {
      expect(compiled.querySelectorAll('#name').value).toMatch('John');
      
    }, 500);
   
  }));

});
