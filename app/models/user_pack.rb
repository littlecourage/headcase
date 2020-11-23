class UserPack < ApplicationRecord

  validates :user_id, presence: true
  validates :pack_id, presence: true

  validates :pack_id, uniqueness: { scope: :user_id }

  belongs_to :user
  
  belongs_to :pack,
    primary_key: :id,
    foreign_key: :pack_id,
    class_name: 'Pack'


end