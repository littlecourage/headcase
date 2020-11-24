class Meditation < ApplicationRecord

  validates :pack_id, presence: true
  validates :order, presence: true, uniqueness: { scope: :pack_id }

  belongs_to :pack,
    foreign_key: :pack_id,
    class_name: "Pack"

  has_one_attached :track

end