import { UserService } from './../_services/user.service';
import { TestBed, inject } from '@angular/core/testing';


describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
