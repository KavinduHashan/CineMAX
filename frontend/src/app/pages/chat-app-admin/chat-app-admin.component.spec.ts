import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAppAdminComponent } from './chat-app-admin.component';

describe('ChatAppAdminComponent', () => {
  let component: ChatAppAdminComponent;
  let fixture: ComponentFixture<ChatAppAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAppAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatAppAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
