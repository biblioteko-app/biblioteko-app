import React from "react";
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import TurmasCarousel from "../../components/TurmasCarousel/TurmasCarousel";
import './Turmas.css'

export default function Turmas({ user }) {

  return (
    <>
      <div className="container">
        <div className="turmas">
          <TurmasCarousel user={ user }/>
        </div>

        { user.userDetails.role === "PROFESSOR" &&
          <div className="add-button">
            <Link to="/addClass">
              <MdAdd className="add-icon" />
            </Link>
          </div>
        }
      </div>
    </>
  )
}