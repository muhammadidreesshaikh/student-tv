import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseManagementRoutingModule } from './course-management-routing.module';
import { CourseManagementComponent } from './course-management.component';
import { CoursesListingComponent } from './courses-listing/courses-listing.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';


@NgModule({
  declarations: [CourseManagementComponent, CoursesListingComponent, CourseDetailsComponent, ClassDetailsComponent, TestDetailsComponent, AddNewQuestionComponent],
  imports: [
    CommonModule,
    CourseManagementRoutingModule
  ]
})
export class CourseManagementModule { }
