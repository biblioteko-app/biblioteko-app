import React from "react";
import './Turma.css'


export default function Turma({ user, turma }) {

  return (
    <div className="turma-container">

      <div className="turma-information">
        <div className="turma-name-info">
          <div className="turma-label-info">
            Turma:
          </div>
          <div className="turma-info-value"> {turma.name} </div>
        </div>
        <div className="turma-subject-info">
          <div className="turma-label-info">
            Disciplina:
          </div>
          <div className="turma-info-value"> {turma.schoolSubject} </div>
        </div>
        <div className="turma-year-info">
          <div className="turma-label-info">
            Ano:
          </div>
          <div className="turma-info-value"> {turma.classYear} </div>
        </div>
        <div className="turma-professor-info">
          <div className="turma-label-info">
            Professor:
          </div>
          <div className="turma-info-value"> {turma.owner.name} </div>
        </div>
        <div className="turma-photo-info"></div>
        <div className="turma-edit-button">
          <button></button>
          <button></button>
        </div>
      </div>

      <div className='turma-books'>

      </div>

      <div className="turma-students">

      </div>

    </div>
  )

}