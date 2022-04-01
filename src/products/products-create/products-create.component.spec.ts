import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsCreateComponent } from './products-create.component';

describe('ProductsCreateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductsCreateComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductsCreateComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular1'`, () => {
    const fixture = TestBed.createComponent(ProductsCreateComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ProductsCreateComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular1 app is running!');
  });
});
