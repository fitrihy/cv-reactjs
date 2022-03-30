export const Experiences = (props) => {
    return (
      <div id='experiences' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Work Experience</h2>
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4'>
                    {' '}
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                        {' '}
                        <img src={d.img} alt='' />{' '}
                      </div>
                    </div>
                    <div className='service-desc'>
                      <h3>{d.company}</h3>
                      <p>{d.position} ({d.year})</p>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }
  