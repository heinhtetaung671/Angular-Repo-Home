import { Component } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { ApiResponseUtils } from '../../model/api-response-utils';
import { SecurityContextHolderService } from '../../service/security-context-holder.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  form: FormGroup;

  constructor(builder: FormBuilder,private service: LoginService, private securityContentHolder: SecurityContextHolderService) {
    this.form = builder.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    this.service.login(this.form.value).subscribe(result => {
      if(ApiResponseUtils.isSuccess(result.status)){
        this.securityContentHolder.context.set({token: result.payload.token})
        alert('Login success!')
        console.log(this.securityContentHolder.context().token)
      }
    })
  }
}
