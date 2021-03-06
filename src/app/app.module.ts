import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import {UserService} from './users/user.service';
import {API_PATH} from './app.tokens';
import {HttpClientModule} from '@angular/common/http';
import {MatModule} from './mat.module';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

import {ThreadsComponent} from './threads/threads.component';
import {TopicPageComponent} from './threads/topic-page/topic-page.component';

import {ThreadDetailsComponent } from './threads/thread-details/thread-details.component';
import {ThreadDetailsPresentationComponent } from './threads/thread-details-presentation/thread-details-presentation.component';

import {ThreadsResolver} from './threads/threads.resolver'
import { ThreadsService } from './threads/threads.service';

import {UsersResolver} from './users/users.resolver';
import { RecentThreadsComponent } from './recent-threads/recent-threads.component';

import { ThreadCreatorComponent } from './threads/thread-creator/thread-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsernameValidatorDirective } from './threads/username-validator.directive';
import { ReplyCreatorComponent } from './threads/reply-creator/reply-creator.component';

import { LoginDialogComponent } from './login/login-dialog.component';

import {PostCreatorDeactivateGuard} from './threads/post-creator-deactivate-guard.service';
import { PostCreatorConfirmDialogComponent } from './threads/post-creator-confirm-dialog/post-creator-confirm-dialog.component';
import {AppToolbarContainerComponent} from './app-toolbar-container/app-toolbar-container.component';
import { UserThreadsComponent } from './user-threads/user-threads.component';

import {ThreadsGuard} from './threads/threads-activate.guard.service';
import {ReplyResolver} from './threads/replies.resolver';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UsersDashboardComponent,
    ThreadsComponent,
    TopicPageComponent,
    ThreadDetailsComponent,
    ThreadDetailsPresentationComponent,
    RecentThreadsComponent,
    TopicPageComponent,
    ThreadCreatorComponent,
    UsernameValidatorDirective,
    ReplyCreatorComponent,
    PostCreatorConfirmDialogComponent,
    AppToolbarContainerComponent,
    LoginDialogComponent,
    UserThreadsComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    PostCreatorConfirmDialogComponent,
  ],
  imports: [
    MatModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    MatModule,
    FlexLayoutModule
  ],
  providers: [
    UserService,
    ThreadsService,
    { provide: API_PATH, useValue: 'http://localhost:3000'},
    ThreadsResolver,
    ReplyResolver,
    UsersResolver,
    PostCreatorDeactivateGuard,
    ThreadsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
