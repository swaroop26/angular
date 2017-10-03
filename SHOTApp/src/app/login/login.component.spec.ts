import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { UserService } from '../common/services/user.service';
import { HttpService } from '../common/services/http.service';
import { HttpModule } from '@angular/http';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FakeUserService } from '../../test/fake-user.service';
import { Router } from '@angular/router';
import { FakeRouter } from '../../test/fake-router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
   

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterTestingModule],       
      declarations: [ LoginComponent ],
      providers: [
        { provide: UserService, useClass: FakeUserService },
        { provide: Router,      useClass: FakeRouter},
          HttpService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User log in should be successful', () => {

    const router = fixture.debugElement.injector.get(Router);   
    // First Spy on element then call the method.
    let navigateSpy = spyOn(router, 'navigateByUrl');
    
    component.login(component.loginData);   
    expect(localStorage.getItem('user')).not.toBeNull();

    //const router = fixture.debugElement.injector.get(Router);   
    //console.info(navigateSpy.calls.first().args[0]);
    expect(navigateSpy.calls.any).toBeTruthy();
    expect(navigateSpy).toHaveBeenCalledWith('/home');
    

   // const navArgs = spyOn(router, 'navigate').calls.first().args[0];
    //expect(navArgs[0]).toContain('home', 'nav to heroes detail URL'); 
   });
  

 
});
