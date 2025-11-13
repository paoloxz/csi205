import me from '../assets/Home/myPhoto.jpg'

const Home = () => {
  return (
    <>
      <div className='text-center mt-4'>
        <h2 className='fw-bold text-primary mb-3'>About Me</h2>

        <img
          src={me}
          alt='รูปนักศึกษา'
          className='rounded-circle border border-3 border-primary'
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />

        <div className='mt-3'>
          <h5 className='fw-bold'>67160172 นางสาวภัสสร เพ็ญพรเลิศชัย</h5>
        </div>
      </div>
      <div>
        <p className='w-50 mx-auto pb-5'>
          ชื่อเล่น: แครอท <br />
          ปัจจุบันศึกษาที่: มหาวิทยาลัยศรีปทุม <br />
          คณะ: เทคโนโลยีสารสนเทศ <br />
          สาขา: วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ <br />
          ชั้นปีที่: 2 <br />
          งานอดิเรก: ดูหนัง, ฟังเพลง, เล่นกับสัตว์เลี้ยง, นอนอยู่บ้าน <br />
          สิ่งที่ชอบ: สัตว์, อาหาร, บ้าน
        </p>
      </div>
    </>
  )
}

export default Home