<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'student_class', 'gender'];

    public function enrollment(){
        return $this->hasMany(StudentEnrollment::class, 'student_id', 'id');
    }

    public function syncCourses($courses){
        StudentEnrollment::where('student_id', $this->id)->delete();

        foreach ($courses as $course){
            StudentEnrollment::create([
               'student_id' => $this->id,
               'course_id' => $course
            ]);
        }
    }
}
