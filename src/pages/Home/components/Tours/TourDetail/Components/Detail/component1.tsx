import React, { Fragment, useState } from "react"
import "./style.css"

const Component1: React.FC = () => {
  const [show, setShow] = useState(false)

  const [infos, setInfos] = useState([
    {
      id: "1",
      title: "Bảo đảm bảo vệ đặt phòng",
      info: "Trong trường hợp hãn hữu khi Chủ nhà cần hủy đặt phòng của bạn trong vòng 30 ngày trước ngày nhận phòng, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn, hoặc sẽ hoàn tiền cho bạn.",
    },
    {
      id: "2",
      title: "Bảo đảm chi phí tương xứng",
      info: "Trong thời gian ở, nếu bạn nhận thấy chỗ ở không đúng như quảng cáo, ví dụ như tủ lạnh ngừng hoạt động và Chủ nhà không thể dễ dàng khắc phục vấn đề này, hoặc số phòng ngủ ít hơn so với thông tin trên mục cho thuê, thì bạn sẽ có 3 ngày để báo cáo vấn đề. Khi đó, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn, hoặc chúng tôi sẽ hoàn tiền cho bạn.",
    },
    {
      id: "3",
      title: "Bảo đảm nhận phòng",
      info: "Nếu bạn không thể nhận phòng và Chủ nhà không thể giải quyết vấn đề này, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn có thời gian ở tương đương, hoặc chúng tôi sẽ hoàn tiền cho bạn.",
    },
    {
      id: "4",
      title: "Đường dây an toàn 24 giờ",
      info: "Nếu cảm thấy không an toàn, bạn sẽ được ưu tiên liên hệ với nhân viên hỗ trợ an toàn được đào tạo đặc biệt của chúng tôi, bất kể ngày đêm.",
    },
  ])

  return (
    <Fragment>
      <div className="h3 text-dark">
        <span className="color-red">Air</span>bnb
      </div>
      <div className="p">
        Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp chủ nhà hủy,
        thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự
        cố trong quá trình nhận phòng.
      </div>
      <button className="btn mt-2" onClick={() => setShow(!show)}>
        Tìm hiểu thêm
      </button>
      {show && (
        <div className="mt-2">
          <div>
            {infos.map((info) => {
              return (
                <div>
                  <div className="p-bold">{info.title}</div>
                  <div className="text-secondary">{info.info}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Component1
