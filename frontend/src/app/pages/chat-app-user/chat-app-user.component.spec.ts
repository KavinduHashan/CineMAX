import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAppUserComponent } from './chat-app-user.component';

describe('ChatAppUserComponent', () => {
  let component: ChatAppUserComponent;
  let fixture: ComponentFixture<ChatAppUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAppUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatAppUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
