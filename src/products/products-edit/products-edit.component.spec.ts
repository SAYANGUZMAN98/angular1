import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsEditComponent } from './products-edit.component';

describe('ProductsEditComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductsEditComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductsEditComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular1'`, () => {
    const fixture = TestBed.createComponent(ProductsEditComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ProductsEditComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular1 app is running!');
  });
});
